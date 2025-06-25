import styled from "styled-components";
import { useListQuery } from "../../queries/useListQuery";
import { TYPE_COLORS } from "../../constants/color";
import { Link } from "react-router-dom";

const HomePage = () => {

    const { data } = useListQuery();

    return (
        <Wrapper>
            <Title>포켓몬 도감</Title>
            <SearchInput placeholder="포켓몬 이름 또는 번호를 입력해주세요" />
            <CardGrid>
                {data?.map((pokemon, i:number) => (
                    <StyledLink to={`/detail/${pokemon.id}`} key={pokemon.id}>
                        <Card>
                            <ImageBox>
                                <img
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                />
                            </ImageBox>
                            <Id>#{pokemon.id}</Id>
                            <Name>{pokemon.name}</Name>
                            {pokemon.types.map((t) => (
                                <Type key={t.type_en} $type={t.type_en}>
                                {t.type_ko}
                                </Type>
                            ))}
                        </Card>
                    </StyledLink>
                ))}
            </CardGrid>
        </Wrapper>
    )
}

export default HomePage;

const Wrapper = styled.div`
    padding: 100px 200px;
`
const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`
const SearchInput = styled.input`
    padding: 10px 18px;
    width: 100%;
    max-width: 340px;
    margin-bottom: 2rem;
    // border: 1px solid #ccc;
    border: none;
    border-radius: 20px;
    background-color:rgb(236, 238, 240);
    &:focus {
        outline: none;
        placeholder: none;
    }
    &::placeholder {
        color: #999;
    }
`
const CardGrid = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 170px);
    gap: 30px;
`
const Card = styled.div`
    width: 170px;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 30px;
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
    img {
        width: 120px;
        height: 120px;
    }
`
const Id = styled.p`
    color:rgb(153, 153, 153);
    font-size: 14px;
`
const Name = styled.p`
    font-weight: bold;
`
const Type = styled.span<{ $type: string }>`
    margin: 10px 3px 0;
    display: inline-block;
    padding: 2px 8px;
    border-radius: 8px;
    background-color: ${({ $type }) => TYPE_COLORS[$type.toLowerCase()]};
    color: #ffffff;
    font-weight: 500;
    font-size: 15px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        color: inherit;
    }
`