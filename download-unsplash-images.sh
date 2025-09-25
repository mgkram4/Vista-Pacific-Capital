#!/bin/bash

# Script to download remaining Unsplash images for local use
# Run this script from the project root directory

echo "Downloading remaining Unsplash images..."

# Create directory if it doesn't exist
mkdir -p public/Images/unsplash

# Download remaining images with descriptive names
echo "Downloading material handling images..."
curl -o "public/Images/unsplash/material-handling-1.jpg" "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

curl -o "public/Images/unsplash/material-handling-2.jpg" "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

curl -o "public/Images/unsplash/material-handling-3.jpg" "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

curl -o "public/Images/unsplash/material-handling-4.jpg" "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

echo "Downloading dump truck images..."
curl -o "public/Images/unsplash/dump-truck-hero.jpg" "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"

echo "Downloading used equipment images..."
curl -o "public/Images/unsplash/used-equipment-hero.jpg" "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&auto=format&fit=crop&q=60"

echo "Downloading brewery equipment images..."
curl -o "public/Images/unsplash/brewery-hero.jpg" "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

echo "Downloading industries images..."
curl -o "public/Images/unsplash/industries-hero.jpg" "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

echo "Downloading vehicle/transportation images..."
curl -o "public/Images/unsplash/forklift.jpg" "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80"

curl -o "public/Images/unsplash/delivery-truck.jpg" "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"

curl -o "public/Images/unsplash/food-truck.jpg" "https://images.unsplash.com/photo-1656857720256-a80aca6398da?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHRydWNrc3xlbnwwfHwwfHx8MA%3D%3D"

curl -o "public/Images/unsplash/semi-truck.jpg" "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

curl -o "public/Images/unsplash/ambulance.jpg" "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1idWxhbmNlfGVufDB8fDB8fHww"

curl -o "public/Images/unsplash/automotive.jpg" "https://images.unsplash.com/photo-1676288176918-232f7caadfee?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXV0b21vdGl2ZXxlbnwwfHwwfHx8MA%3D%3D"

curl -o "public/Images/unsplash/vehicle-hero.jpg" "https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

echo "Downloading manufacturing images..."
curl -o "public/Images/unsplash/cnc-machinery.jpg" "https://images.unsplash.com/photo-1717386255773-a456c611dc4e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q05DJTIwTWFjaGluZXJ5fGVufDB8fDB8fHww"

curl -o "public/Images/unsplash/cnc-machinery-2.jpg" "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

curl -o "public/Images/unsplash/conveyor-systems.jpg" "https://images.unsplash.com/photo-1651525670033-279c26cc2347?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnZleW9yJTIwc3lzdGVtc3xlbnwwfHwwfHx8MA%3D%3D"

curl -o "public/Images/unsplash/industrial-equipment.jpg" "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

curl -o "public/Images/unsplash/heavy-machinery.jpg" "https://images.unsplash.com/photo-1545262722-9e0d80a0bc01?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhdnklMjBtYWNoaW5lcnl8ZW58MHx8MHx8fDA%3D"

curl -o "public/Images/unsplash/manufacturing-hero.jpg" "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

echo "Downloading brewery equipment images..."
curl -o "public/Images/unsplash/brewing-beer.jpg" "https://images.unsplash.com/photo-1532634733-cae1395e440f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyZXdpbmclMjBiZWVyfGVufDB8fDB8fHww"

curl -o "public/Images/unsplash/distillation.jpg" "https://images.unsplash.com/photo-1668380608937-26e2435d369b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGlzdGlsbGF0aW9ufGVufDB8fDB8fHww"

curl -o "public/Images/unsplash/packing-lines.jpg" "https://images.unsplash.com/photo-1536638317175-32449deccfc0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFja2luZyUyMGxpbmVzJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D"

curl -o "public/Images/unsplash/brewery-1.jpg" "https://images.unsplash.com/photo-1533646281814-761f53fc5483?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJld2VyeXxlbnwwfHwwfHx8MA%3D%3D"

curl -o "public/Images/unsplash/brewery-2.jpg" "https://images.unsplash.com/photo-1542835497-a6813df96ed9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJld2VyeXxlbnwwfHwwfHx8MA%3D%3D"

curl -o "public/Images/unsplash/brewery-equipment-hero.jpg" "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"

echo "Downloading used equipment images..."
curl -o "public/Images/unsplash/used-forklift.jpg" "https://images.unsplash.com/photo-1621922688758-359fc864071e"

curl -o "public/Images/unsplash/used-crane.jpg" "https://images.unsplash.com/photo-1589792923962-537704632910"

curl -o "public/Images/unsplash/used-excavator.jpg" "https://images.unsplash.com/photo-1516549655169-df83a0774514"

curl -o "public/Images/unsplash/used-bulldozer.jpg" "https://images.unsplash.com/photo-1519003722824-194d4455a60c"

curl -o "public/Images/unsplash/used-warehouse.jpg" "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"

echo "Downloading rack equipment images..."
curl -o "public/Images/unsplash/warehouse-racks.jpg" "https://images.unsplash.com/photo-1587145711332-18546a94a287"

echo "All images downloaded successfully!"
echo "Images saved to: public/Images/unsplash/"
echo ""
echo "To use these images in your Next.js components, reference them as:"
echo "  backgroundImage=\"/Images/unsplash/[filename].jpg\""
echo "  or"
echo "  src=\"/Images/unsplash/[filename].jpg\""
