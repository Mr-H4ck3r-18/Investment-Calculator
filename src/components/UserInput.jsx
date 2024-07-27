export default function UserInput({onChange,values}) {
    console.log(values)
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="Initial Investment">Initial Investment</label>
                    <input type="number"
                        required
                        value={values.initialInvestment}
                        onChange={(e) => { onChange("initialInvestment", e.target.value) }} />
                </p>
                <p>
                    <label htmlFor="Anual Investment">Anual Investment</label>
                    <input type="number"
                        required
                        value={values.annualInvestment}
                        onChange={(e) => { onChange("annualInvestment", e.target.value) }} />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="Expected Returns">Expected Returns</label>
                    <input type="number"
                        required
                        value={values.expectedReturn}
                        onChange={(e) => { onChange("expectedReturn", e.target.value) }} />
                </p>
                <p>
                    <label htmlFor="Duration">Duration</label>
                    <input type="number"
                        required
                        value={values.duration}
                        onChange={(e) => { onChange("duration", e.target.value) }} />
                </p>
            </div>
        </section>
    )
}