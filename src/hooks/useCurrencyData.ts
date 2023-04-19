import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL";

const getMoeda = async () => {
  const response = await axios.get(API_URL);
  return response.data.USDBRL;
};

export function useCurrencyData() {
  const query = useQuery({
    queryFn: getMoeda,
    queryKey:['currency-data']
  });
  return query;
}
