import { useEffect, useState } from "react"

const useUser = email => {
    const [isUser, setIsUser] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://server-12.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsUser(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [email])
    return [isUser, isBuyerLoading]
}

export default useUser;