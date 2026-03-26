import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  // URL Absoluta para a imagem na pasta public
  const siteUrl = 'https://www.construtoraael.com';
  const logoUrl = `${siteUrl}/logo.png`; // Certifique-se de converter para .png

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row', // Lado a lado: Texto na Esquerda, Imagem na Direita
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #0f766e 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* LADO ESQUERDO: TEXTOS */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: '60%',
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
            CONSTRUTORA ANDRADE & LIMA
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.1 }}>
              Nós
            </div>
            <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.1, color: '#2dd4bf' }}>
              construímos
            </div>
          </div>

          <div style={{ display: 'flex', fontSize: 24, opacity: 0.9 }}>
            Salvador, BA | construtoraael.com
          </div>
        </div>

        {/* LADO DIREITO: LOGO ESTÁTICA */}
        <div
          style={{
            display: 'flex',
            width: '35%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl}
            alt="Logo Construtora"
            width="320" 
            height="320"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}