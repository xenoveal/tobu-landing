const Button = (props) => {
    return (
        <div className={"button noselect "+props.colorclass}>
            <div>
            {props.text}

            </div>
            <style jsx>
                {`
                    .iris1 {
                        color: white;
                        background: var(--iris1);
                    } 
                    .iris5 {
                        color: var(--iris1);
                        background: var(--iris5);
                    }
                    .orange1 {
                        color: white;
                        background: var(--orange1);
                    }
                    .prevent {
                        background: var(--monochrome3);
                        color: var(--monochrome5);
                    }
                    .button {
                        padding: 15px 30px;
                        border-radius: 10px;
                        font-weight: 700;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        cursor: pointer;
                        width: fit-content;
                        white-space: nowrap;
                        transition: background .5s;
                    }
                    @media(min-width: 1200px){
                        #button1{
                            margin-right: 30px;
                        }
                    }
                    @media(max-width: 1200px){
                        .button {
                            font-size: 10px;
                            padding: 15px 20px;
                        }
                    }
                    @media(min-width: 1000px){

                        .orange1:hover {
                            background: var(--orange3);
                        }
                        .iris1:hover{
                            background: var(--iris3);
                        }
                        .iris5:hover{
                            color: var(--monochrome5);
                            background: var(--iris4);
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Button
