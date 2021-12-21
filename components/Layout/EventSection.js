const EventSection = (props) => {
    return (
        <>
            <div className="event-section">
                <p className={"header "+props.config.header}>{props.header}</p>
                <h1 className={"title "+props.config.title}>{props.title}</h1>  
                <p className={"subtitle "+props.config.subtitle}>{props.subtitle}</p>
            </div>
            <style jsx>
                {`
                    p{
                        font-size: 20px;
                        margin:0;
                    }
                    h1, p{
                        text-align: center !important;
                        font-weight: 500;
                    }
                    .add-margin{
                        margin: 20px 0 20px 0;
                    }
                    .event-section{

                        width:100%;
                    }
                    .slate{
                        color: var(--monochrome2);
                    }
                    .iris1{
                        color: var(--iris1);
                    }
                    .black{
                        color: var(--monochrome1);
                    }
                    .header{
                        margin-top:25px;
                        margin-bottom:20px;
                    }
                    .title{
                        font-size: 32px;
                        margin:0;
                    }
                    .xl{
                        font-size: 40px;
                    }
                    .xs{
                        font-size: 16px;
                    }
                    .bold{
                        font-weight: var(--bold);
                    }
                `}
            </style>
        </>
    )
}

export default EventSection
