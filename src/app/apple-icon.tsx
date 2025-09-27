import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #0066FF 0%, #4DABF7 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: 20,
          fontWeight: 'bold',
        }}
      >
        IS
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}