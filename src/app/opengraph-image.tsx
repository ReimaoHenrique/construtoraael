import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at 20% 20%, #1e3a8a 0%, #0f172a 45%, #020617 100%)',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(59,130,246,0.22) 0%, rgba(16,185,129,0.10) 50%, rgba(255,255,255,0.02) 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: 'rgba(59,130,246,0.26)',
            filter: 'blur(4px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -90,
            width: 360,
            height: 360,
            borderRadius: 999,
            background: 'rgba(16,185,129,0.22)',
            filter: 'blur(4px)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '60px 72px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 12,
                border: '2px solid rgba(255,255,255,0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                fontWeight: 800,
                background: 'rgba(255,255,255,0.08)',
              }}
            >
              A&L
            </div>
            <span>Construtora Andrade & Lima</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 900 }}>
            <div
              style={{
                fontSize: 24,
                color: 'rgba(203,213,225,0.95)',
                textTransform: 'uppercase',
                letterSpacing: 3,
                fontWeight: 600,
              }}
            >
              Engenharia, Obras e Infraestrutura
            </div>
            <div
              style={{
                fontSize: 66,
                lineHeight: 1.04,
                fontWeight: 800,
                letterSpacing: -1.2,
              }}
            >
              Construindo com tecnica, prazo e responsabilidade.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 24,
              color: 'rgba(226,232,240,0.92)',
            }}
          >
            <span>construtoraael.com</span>
            <span>Salvador, BA</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
