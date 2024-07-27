import { calculateInvestmentResults, formatter } from '../util/investment'
export default function Results({ values }) {
    const results = calculateInvestmentResults(values)
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Invterest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((index) => {
                    const totalInterest =
                        index.valueEndOfYear -
                        index.annualInvestment * index.year -
                        initialInvestment;
                    const totalAmountInvested=index.valueEndOfYear-totalInterest
                    return (
                        <tr key={index.year}>
                            <td>{index.year}</td>
                            <td>{formatter.format(index.valueEndOfYear)}</td>
                            <td>{formatter.format(index.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}