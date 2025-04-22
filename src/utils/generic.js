import {
  GENERIC as fallbackGenerics,
} from "@/constants/genericMedicine";
export const fetchGenericEquivalents = async (drugName) => {
  const url = `https://rxnav.nlm.nih.gov/REST/RxNorm/approximateTerm.json?term=${encodeURIComponent(
    drugName
  )}`;
  try {
    const response = await axios.get(url);

    return response.data.approximateGroup?.candidate || [];
  } catch (err) {
    if (err.response?.status === 404 || !err.response) {
      const generics = fallbackGenerics[drugName] || [];
      return generics.map((name, index) => ({
        id: index + 1,
        brand: drugName,
        name: name,
        rank: "0.95",
        price: Math.floor(Math.random() * 50) + 5,
      }));
    }
    return [];
  }
};
