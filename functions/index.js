const { onRequest } = require("firebase-functions/v2/https");
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.generarRecomendacion = onRequest({ cors: true }, async (req, res) => {
  try {
    const { hashtag } = req.body;

    if (!hashtag) {
      return res.status(400).json({ error: "El hashtag es requerido." });
    }

    // Leemos la API Key desde process.env
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res
        .status(500)
        .json({ error: "No se encontró GEMINI_API_KEY en el archivo .env" });
    }

    const tagLimpio = hashtag.replace("#", "");

    // Bloque try anidado exclusivamente para la interacción con Gemini
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-3.6-flash",
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json",
        },
      });

      const prompt = `El usuario hizo clic en el hashtag ${hashtag}.
Identificá el lugar o atracción turística principal en Argentina al que se refiere.
Devuelve EXCLUSIVAMENTE un objeto JSON válido con:
{
  "lugar": "Nombre claro del lugar (ej: Viñedos de Mendoza)",
  "queryFotos": "término exacto en inglés para buscar fotos de alta calidad (ej: mendoza vineyards uco valley)"
}
No utilices formato markdown.`;

      const result = await model.generateContent(prompt);
      const respuestaTexto = result.response.text();

      const datosJSON = JSON.parse(respuestaTexto);
      return res.json(datosJSON);
    } catch (apiError) {
      console.warn("Falla en Gemini (cuota o servidor), aplicando respuesta de respaldo:", apiError.message);
      
      // Retorno directo de respaldo si Gemini falla (evita responder error 500)
      return res.json({
        lugar: tagLimpio,
        queryFotos: `${tagLimpio} argentina`
      });
    }
  } catch (error) {
    console.error("Error detallado en el servidor:", error);
    return res.status(500).json({
      error: error.message || "Ocurrió un error en el servidor.",
    });
  }
});
