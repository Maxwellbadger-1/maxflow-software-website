import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Maxflow Software | Maßgeschneiderte Programme & Websites';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(139, 92, 246) 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            bottom: '-50px',
            left: '-50px',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              marginBottom: '40px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://maxflow-software.de/logo.png"
              alt="Maxflow Software"
              width="400"
              height="133"
              style={{ height: '80px', width: 'auto' }}
            />
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              fontFamily: 'system-ui',
              maxWidth: '900px',
              textAlign: 'center',
            }}
          >
            Maßgeschneiderte Programme & Websites
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'system-ui',
              maxWidth: '900px',
              textAlign: 'center',
            }}
          >
            Entwickelt mit neuesten Technologien
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
