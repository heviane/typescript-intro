/*
    Código (getZipCode.ts) refatorado seguindo algumas boas práticas de clean code. 
    Tornar o código mais legível, modular e expressivo.
*/

/*  Para obter o código do CEP com base em coordenadas de latitude e longitude, 
    você precisará usar um serviço de geocodificação reversa, como o oferecido pelo Google Maps. 
    Aqui está um exemplo básico usando a API do Google Maps.

    O uso de async/await é introduzido para tornar a lógica de assincronia mais clara. 
    Lembre-se de substituir 'SUA_CHAVE_DE_API' pela sua chave de API do Google Maps.

    Lembre-se de que o uso da API do Google Maps está sujeito aos termos de serviço da Google 
    e pode exigir uma chave de API válida. 
    Certifique-se de estar em conformidade com esses termos ao implementar essa solução.
*/

interface AddressComponent {
    short_name: string;
    types: string[];
  }
  
  interface GeocodeResult {
    address_components: AddressComponent[];
  }
  
  async function fetchGeocodeData(latitude: number, longitude: number): Promise<GeocodeResult> {
    const apiKey: string = 'SUA_CHAVE_DE_API';
    const url: string = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    const response = await fetch(url);
    return response.json();
  }
  
  function extractZipCode(addressComponents: AddressComponent[]): string | undefined {
    const zipCodeComponent = addressComponents.find((component) => component.types.includes('postal_code'));
    return zipCodeComponent?.short_name;
  }
  
  function logZipCode(zipCode: string | undefined): void {
    if (zipCode) {
      console.log('Código do CEP:', zipCode);
    } else {
      console.log('Código do CEP não encontrado.');
    }
  }
  
  async function getZipCode(latitude: number, longitude: number): Promise<void> {
    try {
      const geocodeResult = await fetchGeocodeData(latitude, longitude);
  
      if (geocodeResult.address_components.length > 0) {
        const zipCode = extractZipCode(geocodeResult.address_components);
        logZipCode(zipCode);
      } else {
        console.log('Nenhum resultado encontrado para as coordenadas fornecidas.');
      }
    } catch (error) {
      console.error('Erro ao obter o código do CEP:', error);
    }
  }
  
  // Exemplo de uso
  getZipCode(-23.550520, -46.633307);