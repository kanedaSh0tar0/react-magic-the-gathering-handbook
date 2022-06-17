import { useState } from 'react'

import Error from '../components/Error/Error'

function withHandlingResponse(View) {
    return props => {
        const [errorResponse, setErrorResponse] = useState(false)

        return (
            <div>
                {
                    errorResponse
                        ? <Error />
                        : <View setErrorResponse={setErrorResponse} {...props} />
                }
            </div>
        )
    }
}

export default withHandlingResponse