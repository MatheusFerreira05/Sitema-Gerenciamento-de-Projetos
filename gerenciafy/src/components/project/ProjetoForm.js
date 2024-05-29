function ProjetoForm(){

    return(
        <form>
            <div>
                <input type="text" placeholder="Insira o Nome do Projeto"/>
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento total"/>
            </div>
            <div>
                <select name="id_categoria">
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value='Criar Projeto'/>
            </div>
        </form>
    )
}

export default ProjetoForm