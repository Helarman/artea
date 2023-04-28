import Error from "@/components/Error/Error"

const Success = () => {
    return (
        <div>
            <Error
                errorCode={`Успешно`}
                errorName={`Отзыв был добавлен`}
                errorText={``}
            />
            
        </div>
    )
}

export default Success;