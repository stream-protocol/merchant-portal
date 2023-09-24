import axios from "axios"
import { STREAMPAYMENTS_BACKEND_URL } from "../constants/stream-payments-backend-url"

const client = axios.create({ baseURL: STREAMPAYMENTS_BACKEND_URL })

export default function medusaRequest(method, path = "", payload = {}) {
  const options = {
    method,
    withCredentials: true,
    url: path,
    data: payload,
    json: true,
  }
  return client(options)
}
