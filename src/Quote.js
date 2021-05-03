

const Quote = ({quote, author}) => {

    return (
        <>
            <h3>{quote}</h3>
            <p className = "autor" >-"{author}"</p>
        </>
    )

}

export default Quote;