const url = "https://digimon-api.vercel.app/api/digimon"

export async function fetchDigimon() {
    try {
     const res = await fetch(url)
     const data = await res.json()
    return data
     
    } catch (err) {
        console.error(err)
    }
}