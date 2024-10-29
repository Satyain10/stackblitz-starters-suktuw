import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || 'your-mapbox-token'

export default function Map({ location }) {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [location.lng, location.lat],
      zoom: 13
    })

    new mapboxgl.Marker()
      .setLngLat([location.lng, location.lat])
      .addTo(map.current)

    return () => map.current?.remove()
  }, [location])

  return (
    <div ref={mapContainer} className="w-full h-full rounded-lg" />
  )
}