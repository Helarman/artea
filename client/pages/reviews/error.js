import Error from "@/components/Error/Error"

const Success = () => {
    return (
        <div>
            <Error
                errorCode={`Ошибка`}
                errorName={`Отзыв не был добавлен`}
                errorText={``}
            />
            
        </div>
    )
}

export default Success;