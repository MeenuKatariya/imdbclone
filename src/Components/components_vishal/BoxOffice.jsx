import React from 'react'
import styled from "styled-components";
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';


const Container = styled.div`
    display:flex;
    width:100%;
    height:210px;
    // border: 1px solid white;
`;

const InsideContainer = styled.div`
    width:50%;
    height:100%;
    // border:1px solid green;
`;

const ContainerContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    widht:100%;
    height:75px;
    // border:1px solid blue;
    // cursor:pointer;
    color:white;
    margin-right:20px;
`;

const Stick = styled.p`
    fontSize:20px;
    fontWeight:300;
    color:#fbc02d;
    margin:0px 0px 0px 5px;
`;

const Titel = styled.p`
    color: rgba(179,179,179,1); 
    font-size: 12px; 
    font-weight:700;
    letter-spacing: 1.5px;
    margin: 0px;
`;

const BoxOffice = () => {
    return (
        <Container>
            <InsideContainer>
                <ContainerContent>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }
                        }>
                        <p>1</p> <Stick> |</Stick>
                        <BookmarkAddSharpIcon
                            sx={{
                                color: '#2f2f2f',
                                fontSize: '55px',
                                cursor: 'pointer',
                                "&:hover": { color: '#787575' }
                            }
                            } />
                        <div
                            style={{
                                margin: '3px',
                                cursor: 'pointer'
                            }
                            }>
                            <p
                                style={{ margin: '-5px 0px 3px' }
                                }>DC League of Super-Pets</p>
                            <Titel>$23M</Titel>
                        </div>
                    </div>
                    <div>
                        <ConfirmationNumberIcon
                            viewBox={'-8 -18 42 62'}
                            preserveAspectRatio='none'
                            sx={{
                                color: '#5799ef',
                                width: '43px',
                                height: '43px',
                                transform: 'rotate(135deg)',
                                borderRadius: '50%',
                                marginRight: '45px',
                                "&:hover": {
                                    backgroundColor: 'rgba(87 ,153 ,239, 0.18)',
                                    color: 'rgba(87 ,153 ,250, 1)'
                                },
                                cursor:'pointer'
                            }
                            } />
                    </div>
                </ContainerContent>


                <ContainerContent
                    style={{ background: 'linear-gradient(to right, #000000 20%, #808080 500%)' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }
                        }>
                        <p>2</p> <Stick> |</Stick>
                        <BookmarkAddSharpIcon
                            sx={{
                                color: '#2f2f2f',
                                fontSize: '55px',
                                cursor: 'pointer',
                                "&:hover": { color: '#787575' }
                            }
                            } />
                        <div
                            style={{
                                margin: '3px',
                                cursor: 'pointer'
                            }
                            }>
                            <p
                                style={{ margin: '-5px 0px 3px' }
                                }>Nope</p>
                            <Titel>$19M</Titel>
                        </div>
                    </div>
                    
                </ContainerContent>


                <ContainerContent>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }
                        }>
                        <p>3</p> <Stick> |</Stick>
                        <BookmarkAddSharpIcon
                            sx={{
                                color: '#2f2f2f',
                                fontSize: '55px',
                                cursor: 'pointer',
                                "&:hover": { color: '#787575' }
                            }
                            } />
                        <div
                            style={{
                                margin: '3px',
                                cursor: 'pointer'
                            }
                            }>
                            <p
                                style={{ margin: '-5px 0px 3px' }
                                }>Thor: Love and Thunder</p>
                            <Titel>$13M</Titel>
                        </div>
                    </div>
                    <div>
                        <ConfirmationNumberIcon
                            viewBox={'-8 -18 42 62'}
                            preserveAspectRatio='none'
                            sx={{
                                color: '#5799ef',
                                width: '43px',
                                height: '43px',
                                transform: 'rotate(135deg)',
                                borderRadius: '50%',
                                marginRight: '45px',
                                "&:hover": {
                                    backgroundColor: 'rgba(87 ,153 ,239, 0.18)',
                                    color: 'rgba(87 ,153 ,250, 1)'
                                },
                                cursor:'pointer'
                            }
                            } />
                    </div>
                </ContainerContent>

            </InsideContainer>


            <InsideContainer>
                <ContainerContent
                    style={{ background: 'linear-gradient(to right, #000000 20%, #808080 500%)' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }
                        }>
                        <p>4</p> <Stick> |</Stick>
                        <BookmarkAddSharpIcon
                            sx={{
                                color: '#2f2f2f',
                                fontSize: '55px',
                                cursor: 'pointer',
                                "&:hover": { color: '#787575' }
                            }
                            } />
                        <div
                            style={{
                                margin: '3px',
                                cursor: 'pointer'
                            }
                            }>
                            <p
                                style={{ margin: '-5px 0px 3px' }
                                }>Minions: The Rise of Gru</p>
                            <Titel>$11M</Titel>
                        </div>
                    </div>
                    <div>
                        <ConfirmationNumberIcon
                            viewBox={'-8 -18 42 62'}
                            preserveAspectRatio='none'
                            sx={{
                                color: '#5799ef',
                                width: '43px',
                                height: '43px',
                                transform: 'rotate(135deg)',
                                borderRadius: '50%',
                                marginRight: '45px',
                                "&:hover": {
                                    backgroundColor: 'rgba(87 ,153 ,239, 0.18)',
                                    color: 'rgba(87 ,153 ,250, 1)'
                                },
                                cursor:'pointer'
                            }
                            } />
                    </div>
                </ContainerContent>


                <ContainerContent>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }
                        }>
                        <p>5</p> <Stick> |</Stick>
                        <BookmarkAddSharpIcon
                            sx={{
                                color: '#2f2f2f',
                                fontSize: '55px',
                                cursor: 'pointer',
                                "&:hover": { color: '#787575' }
                            }
                            } />
                        <div
                            style={{
                                margin: '3px',
                                cursor: 'pointer'
                            }
                            }>
                            <p
                                style={{ margin: '-5px 0px 3px' }
                                }>Top Gun: Maverick</p>
                            <Titel>$8.4M</Titel>
                        </div>
                    </div>
                    <div>
                        <ConfirmationNumberIcon
                            viewBox={'-8 -18 42 62'}
                            preserveAspectRatio='none'
                            sx={{
                                color: '#5799ef',
                                width: '43px',
                                height: '43px',
                                transform: 'rotate(135deg)',
                                borderRadius: '50%',
                                marginRight: '45px',
                                "&:hover": {
                                    backgroundColor: 'rgba(87 ,153 ,239, 0.18)',
                                    color: 'rgba(87 ,153 ,250, 1)'
                                },
                                cursor:'pointer'
                            }
                            } />
                    </div>
                </ContainerContent>


                <ContainerContent
                    style={{ background: 'linear-gradient(to right, #000000 20%, #808080 500%)' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }
                        }>
                        <p>6</p> <Stick> |</Stick>
                        <BookmarkAddSharpIcon
                            sx={{
                                color: '#2f2f2f',
                                fontSize: '55px',
                                cursor: 'pointer',
                                "&:hover": { color: '#787575' }
                            }
                            } />
                        <div
                            style={{
                                margin: '3px',
                                cursor: 'pointer'
                            }
                            }>
                            <p
                                style={{ margin: '-5px 0px 3px' }
                                }>Where the Crawdads Sing</p>
                            <Titel>$7.6M</Titel>
                        </div>
                    </div>
                    
                </ContainerContent>

            </InsideContainer>



        </Container>
    )
}

export default BoxOffice