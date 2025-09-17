'use client'
import { ComponentProps } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

const CotonCandy: React.FC<ComponentProps<'canvas'> & { hidden?: boolean }> = ({
  hidden,
  style,
  ...props
}) => {
  return (
    <ShaderGradientCanvas
      // importedfiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        top: style?.top || 0,
        zIndex: hidden ? -100 : -1,
        ...style,
      }}
      {...props}
    >
      <ShaderGradient
        control="query"
        // type="waterPlane"
        // animate="on"
        // range="disabled"
        // color1="#0066F4"
        // color2="#FECEF7"
        // color3="#75D2FB"
        // shader="A"
        // grain="off"
        // lightType="3d"
        // brightness={1.4}
        // cDistance={32}
        // cPolarAngle={125}
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=4.4&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%230066F4&color2=%23FECEF7&color3=%2375D2FB&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&toggleAxis=false&type=plane&uAmplitude=0&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false&zoomOut=false"
      // urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=4.5&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%230066F4&color2=%23FECEF7&color3=%2375D2FB&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&toggleAxis=false&type=plane&uAmplitude=0&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false&zoomOut=false"
      />
      {/* <Placeholder title="" color2="#FECEF7" color1="#75D2FB" /> */}
    </ShaderGradientCanvas>
  )
}

export default CotonCandy
