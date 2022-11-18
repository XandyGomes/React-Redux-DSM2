import "./Intervalo.css"
import React from "react"

import Card from "./Card"

export default props => {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    Mínimo:
                    <input type="number" value={0} />
                </span>
                <span>
                    Máximo:
                    <input type="number" value={10} />
                </span>
            </div>
        </Card>
    )
}