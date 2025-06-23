import styled from "styled-components";
import { TYPE_COLORS } from "../../constants/color";
import { useDetailQuery } from "../../queries/useDetailQuery";
import { useParams } from "react-router-dom";

const DetailPage = () => {

    const { id } = useParams();
    const { data } = useDetailQuery(id!);
    
    return (
        <Wrapper>
            <Detail>
                <ImageBox>
                    <img
                        src={data?.image}
                        alt={data?.pokemon.name}
                    />
                </ImageBox>
                <Id>#{data?.pokemon.id}</Id>
                <Name>{data?.name}</Name>
                {data?.types.map((t) => (
                    <Type key={t.type_en} $type={t.type_en}>
                    {t.type_ko}
                    </Type>
                ))}
                <div>
                    <Height>신장:{(data?.pokemon?.height! / 10).toFixed(1)}m</Height>
                    <Weight>체중:{(data?.pokemon?.weight! / 10).toFixed(1)}kg</Weight>
                </div>
                {data?.flavor_text}
            </Detail>
        </Wrapper>
    )
}

export default DetailPage;

const Height = styled.span``
const Weight = styled.span``
const Wrapper = styled.div`
    padding: 100px 200px;
`

const Detail = styled.div`
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`

const ImageBox = styled.div`
    width: 100%;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 200px;
        height: 200px;
    }
`

const Id = styled.p``

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
`