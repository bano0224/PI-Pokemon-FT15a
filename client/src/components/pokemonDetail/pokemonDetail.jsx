import { useDispatch, useSelector } from 'react-redux';

const pokemonDetail = () => {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons)


    return(
        <div>
            {
                <div>

                </div>
            }
        </div>
)
}