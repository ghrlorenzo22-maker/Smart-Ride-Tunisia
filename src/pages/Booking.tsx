import { MapPin, Navigation, Car, CreditCard, ChevronRight, Clock, Star, Map as MapIcon, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const pickupIcon = new L.DivIcon({
  html: `<div style="width: 16px; height: 16px; background-color: #141414; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
  className: 'custom-leaflet-icon',
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

const dropoffIcon = new L.DivIcon({
  html: `<div style="width: 16px; height: 16px; background-color: #F9D523; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
  className: 'custom-leaflet-icon',
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

function MapEvents({ mode, onSelect }: { mode: 'pickup' | 'dropoff', onSelect: (latlng: L.LatLng) => void }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });
  return null;
}

export default function Booking() {
  const [selectedRide, setSelectedRide] = useState<string | null>('economy');
  const [bookingState, setBookingState] = useState<'idle' | 'searching' | 'found'>('idle');
  const [pickupCoords, setPickupCoords] = useState<L.LatLngExpression | null>([36.8065, 10.1815]);
  const [dropoffCoords, setDropoffCoords] = useState<L.LatLngExpression | null>(null);
  const [pickupText, setPickupText] = useState('Tunis (Tap map to change)');
  const [dropoffText, setDropoffText] = useState('');
  const [selectingMode, setSelectingMode] = useState<'pickup' | 'dropoff'>('dropoff');

  const handleMapClick = async (latlng: L.LatLng) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`);
      const data = await res.json();
      const placeName = data.display_name.split(',').slice(0, 2).join(', ');
      
      if (selectingMode === 'pickup') {
        setPickupCoords([latlng.lat, latlng.lng]);
        setPickupText(placeName || 'Selected Location');
        setSelectingMode('dropoff');
      } else {
        setDropoffCoords([latlng.lat, latlng.lng]);
        setDropoffText(placeName || 'Selected Location');
      }
    } catch (e) {
      if (selectingMode === 'pickup') {
        setPickupCoords([latlng.lat, latlng.lng]);
        setPickupText('Selected Location');
        setSelectingMode('dropoff');
      } else {
        setDropoffCoords([latlng.lat, latlng.lng]);
        setDropoffText('Selected Location');
      }
    }
  };

  const rideTypes = [
    { id: 'economy', name: 'Smart Economy', desc: 'Affordable daily rides', price: '7.50 TND', time: '3 min away', icon: <Car className="h-6 w-6" /> },
    { id: 'comfort', name: 'Smart Comfort', desc: 'Newer cars, more legroom', price: '12.00 TND', time: '5 min away', icon: <Car className="h-6 w-6 text-primary" /> },
    { id: 'xl', name: 'Smart XL', desc: 'Up to 6 seats for groups', price: '18.50 TND', time: '8 min away', icon: <Car className="h-6 w-6" /> },
  ];

  const handleBooking = () => {
    setBookingState('searching');
    setTimeout(() => {
      setBookingState('found');
    }, 4000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
      
      {/* Left Pane: Booking Form */}
      <div className="w-full lg:w-[450px] bg-white border-r border-gray-100 flex flex-col z-10 shadow-[20px_0_40px_rgba(0,0,0,0.02)]">
        <div className="p-6 overflow-y-auto">
          <h1 className="text-4xl font-heading font-extrabold mb-8 tracking-tight">Where to?</h1>
          
          <div className="space-y-4 mb-8 relative">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Pickup Location</label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${selectingMode === 'pickup' ? 'bg-primary ring-2 ring-primary/50' : 'bg-green-500'}`}></div>
                <input 
                  type="text" 
                  value={pickupText}
                  onChange={(e) => setPickupText(e.target.value)}
                  onFocus={() => setSelectingMode('pickup')}
                  placeholder="Set pickup location"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none text-sm font-medium transition-all text-zinc-900"
                />
              </div>
            </div>
            
            <div className="absolute left-4 top-[64px] bottom-[50px] w-0.5 bg-gray-200 border-dashed z-0 hidden lg:block"></div>
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Destination</label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${selectingMode === 'dropoff' ? 'bg-primary ring-2 ring-primary/50' : 'bg-red-500'}`}></div>
                <input 
                  type="text" 
                  value={dropoffText}
                  onChange={(e) => setDropoffText(e.target.value)}
                  onFocus={() => setSelectingMode('dropoff')}
                  placeholder="Where to?" 
                  autoFocus
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium text-zinc-900 placeholder:text-gray-400 shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Suggested Rides
          </div>

          <div className="space-y-3 mb-8">
            {rideTypes.map((ride) => (
              <div 
                key={ride.id}
                onClick={() => setSelectedRide(ride.id)}
                className={`p-3 rounded-2xl cursor-pointer transition-all flex items-center justify-between ${selectedRide === ride.id ? 'border-2 border-primary bg-yellow-50' : 'border border-gray-100 hover:border-gray-300 bg-white opacity-60 hover:opacity-100'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedRide === ride.id ? 'bg-white shadow-sm text-[#141414]' : 'bg-gray-50 text-gray-400'}`}>
                    {ride.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase opacity-80 text-[#141414]">
                      {ride.name}
                    </h4>
                    <p className="font-bold text-sm text-[#141414]">{ride.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase text-gray-400">{ride.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center justify-between mb-8 cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3 text-[#141414]">
              <CreditCard className="w-5 h-5 text-gray-500" />
              <div className="font-bold text-sm">Cash Payment</div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

        </div>

        <div className="p-6 border-t border-gray-100 bg-white mt-auto min-h-[120px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {bookingState === 'idle' && (
              <motion.button 
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={handleBooking}
                className="w-full py-4 bg-primary text-[#141414] font-black uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Confirm Booking
              </motion.button>
            )}
            
            {bookingState === 'searching' && (
              <motion.div 
                key="searching"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full py-4 bg-gray-50 text-gray-500 border border-gray-200 font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3"
              >
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                Finding nearest driver...
              </motion.div>
            )}

            {bookingState === 'found' && (
              <motion.div 
                key="found"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full bg-[#141414] rounded-2xl p-4 text-white shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl">👤</div>
                    <div>
                      <div className="font-bold flex items-center gap-2 text-sm">Ahmed B. <Star className="w-3 h-3 fill-primary text-primary" /> <span className="font-normal text-xs text-gray-400">4.9</span></div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Kia Rio • 2054 TUN 123</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-primary text-xl">2 min</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Away</div>
                  </div>
                </div>
                <button 
                  onClick={() => setBookingState('idle')}
                  className="w-full py-3 bg-white text-[#141414] font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Cancel Booking
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Pane: Real Map */}
      <div className="flex-1 relative min-h-[500px] z-0">
        <MapContainer center={[36.8065, 10.1815]} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents mode={selectingMode} onSelect={handleMapClick} />
          {pickupCoords && (
            <Marker position={pickupCoords} icon={pickupIcon}>
              <Popup>Pickup Location</Popup>
            </Marker>
          )}
          {dropoffCoords && (
            <Marker position={dropoffCoords} icon={dropoffIcon}>
              <Popup>Destination</Popup>
            </Marker>
          )}
          {pickupCoords && dropoffCoords && (
            <Polyline positions={[pickupCoords, dropoffCoords]} color="#F9D523" weight={4} dashArray="10, 10" className="opacity-80" />
          )}
        </MapContainer>

        {/* Floating instruction */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[400] bg-[#141414] text-white px-4 py-2 rounded-full shadow-lg text-[10px] uppercase font-bold tracking-widest pointer-events-none">
          {selectingMode === 'pickup' ? 'Tap map to set pickup' : 'Tap map to set destination'}
        </div>

        {/* Floating Map Controls Simulated */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-[400]">
          <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#141414] cursor-pointer hover:bg-gray-50 border border-gray-100" onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const latlng: L.LatLngTuple = [position.coords.latitude, position.coords.longitude];
                  setPickupCoords(latlng);
                  setPickupText('Current Location');
                  if (selectingMode === 'pickup') setSelectingMode('dropoff');
                },
                () => alert('Please enable location services.')
              );
            }
          }}>
            <Navigation className="w-5 h-5" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
