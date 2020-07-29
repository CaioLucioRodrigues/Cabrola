class SecondStatusView extends View {

    template(model) {
        return `            
            Exp : ${model.status.experience} </br>
            Gold: ${model.status.gold} 
        `;
    }
}  