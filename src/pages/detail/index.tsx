import styled from "styled-components";
import { TYPE_COLORS } from "../../constants/color";
import { useDetailQuery } from "../../queries/useDetailQuery";
import { useParams } from "react-router-dom";
import { Line } from 'rc-progress';

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
                <Size>
                    <Height>신장:{(data?.pokemon?.height! / 10).toFixed(1)}m</Height>
                    <Weight>체중:{(data?.pokemon?.weight! / 10).toFixed(1)}kg</Weight>
                </Size>
                {data?.flavor_text}
                <StatWrapper>
                    {data?.stats.map((s) => {
                        const firstType = data.types[0].type_en.toLowerCase();
                        const color = TYPE_COLORS[firstType];

                        return (
                        <Stat key={s.name}>
                            <Label>{s.name}</Label>
                            <Value>{s.value}</Value>
                            <Bar>
                            <Line
                                percent={s.value}
                                strokeWidth={2.6}
                                trailWidth={2.6}
                                strokeColor={color}
                                trailColor="#e5e7eb"
                            />
                            </Bar>
                        </Stat>
                        );
                    })}
                </StatWrapper>
            </Detail>
        </Wrapper>
    )
}

export default DetailPage;

const Height = styled.span``
const Weight = styled.span``
const Size = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 30px;
`

const Detail = styled.div`
    background-color: #ffffff;
    padding: 50px;
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: inline-block;
`

const ImageBox = styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 200px;
        height: 200px;
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
    margin: 10px 3px 20px;
    display: inline-block;
    padding: 2px 8px;
    border-radius: 8px;
    background-color: ${({ $type }) => TYPE_COLORS[$type.toLowerCase()]};
    color: #ffffff;
    font-weight: 500;
`

const StatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 20px;
`

const Stat = styled.div`
    display: flex;
    font-size: 15px;
`

const Bar = styled.div`
    flex: 1;
    width: 100%;
    height: 10px;
    min-height: 10px;
    max-height: 10px;
    flex-shrink: 0;
`

const Label = styled.span`
    font-weight: bold;
    width: 80px;
    text-align: left;
`
const Value = styled.span`
    width: 30px;
    text-align: left;
`