import Error from "@/components/Error/Error"

const NotFound = () => {

    return (
        <div>
            <Error
                errorCode={`404`}
                errorName={`Извините, запрошенная страница не найдена`}
                errorText={`Страница, которую вы ищете, могла быть удалена или временно недоступна`}
            />
        </div>
    )
}

export default NotFound;