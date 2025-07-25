const API_KEY = import.meta.env.PUBLIC_API_KEY;

export const sendOpenAIMessage = async (message: string): Promise<string> => {
  try {
    const answer = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Eres un asistente útil.' },
          { role: 'user', content: message }
        ],
        temperature: 0.7
      })
    });

    const data = await answer.json();
    console.log('[DEBUG] Respuesta de OpenAI:', data);

    return data.choices?.[0]?.message?.content?.trim() ?? 'Sin respuesta';
  } catch (error) {
    console.error('Error al llamar a OpenAI:', error);
    return 'Hubo un error al conectar con el modelo.';
  }
};
