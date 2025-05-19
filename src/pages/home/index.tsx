import styled from "styled-components";
import { useListQuery } from "../../queries/useListQuery";
import { TYPE_COLORS } from "../../constants/color";

const HomePage = () => {

    const { data } = useListQuery();

    return (
        <Wrapper>
            <Title>포켓몬 도감</Title>
            <SearchInput placeholder="포켓몬 이름 또는 번호를 이력해주세요" />
            <CardGrid>
                {data?.map((pokemon, i:number) => (
                    <Card key={i}>
                        <ImageBox>
                            <img
                                src={pokemon.image}
                                alt={pokemon.name}
                            />
                        </ImageBox>
                        <Name>{pokemon.name}</Name>
                        {pokemon.types.map((t) => (
                            <Type key={t.type_en} $type={t.type_en}>
                            {t.type_ko}
                            </Type>
                        ))}
                    </Card>
                ))}
            </CardGrid>
        </Wrapper>
    )
}

export default HomePage;

const Type = styled.span<{ $type: string }>`
    margin: 10px 3px 0;
    display: inline-block;
    padding: 2px 8px;
    border-radius: 8px;
    background-color: ${({ $type }) => TYPE_COLORS[$type.toLowerCase()]};
    color: #ffffff;
    font-weight: 500;
`

const Wrapper = styled.div`
    padding: 100px 200px;
`

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`

const SearchInput = styled.input`
    padding: 10px 14px;
    width: 100%;
    max-width: 400px;
    margin-bottom: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
`

const CardGrid = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 180px);
    gap: 20px;
`

const Card = styled.div`
    width: 180px;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
`
    
const ImageBox = styled.div`
    width: 100%;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Name = styled.p`
    font-weight: bold;
`