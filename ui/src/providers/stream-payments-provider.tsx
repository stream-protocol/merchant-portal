import { StreamPaymentsProvider as Provider } from "streampayments-react"
import { PropsWithChildren } from "react"
import { STREAMPAYMENTS_BACKEND_URL } from "../constants/stream-payments-backend-url"
import { queryClient } from "../constants/query-client"

export const StreamPaymentsProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider
      queryClientProviderProps={{
        client: queryClient,
      }}
      baseUrl={STREAMPAYMENTS_BACKEND_URL}
    >
      {children}
    </Provider>
  )
}
