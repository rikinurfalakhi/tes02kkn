import React from "react";
import { styled } from "styled-components";
import { Tree, TreeNode } from "react-organizational-chart";
import { Container, Col, Row } from "react-bootstrap";
import { strukturDataDesa } from "../data";
import img1 from '../assets/img/testimonial/people-2.jpg'

const StyledNode = styled.div`
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
  text-align: center;
`;

const StrukturDesa = () => (
    <div className="testimonialPage">
        <Container>
            <Col>
                <Row>
                    <h2 className="text-center mb-5">STRUKTUR ORGANISASI PEMERINTAH DESA KADEMANGAN</h2>
                    <Tree
                        lineWidth={"2px"}
                        lineColor={"black"}
                        lineBorderRadius={"10px"}
                        
                        label={
                            <StyledNode>
                                <img src={img1} alt="Image" />
                                <h2>{strukturDataDesa[0].nama}</h2>
                                <h3>{strukturDataDesa[0].jabatan}</h3>
                            </StyledNode>
                        }
                    >
                        <TreeNode
                            label={
                                <StyledNode>
                                    <img className="okdo" src={img1} alt="Image" />
                                    
                                    <h2>{strukturDataDesa[1].nama}</h2>
                                    <h3>{strukturDataDesa[1].jabatan}</h3>
                                </StyledNode>
                            }
                        >

                        </TreeNode>
                        <TreeNode
                            label={
                                <StyledNode>
                                    <img src={img1} alt="Image" />
                                    <h2>{strukturDataDesa[2].nama}</h2>
                                    <h3>{strukturDataDesa[2].jabatan}</h3>
                                </StyledNode>
                            }
                        >

                        </TreeNode>
                        <TreeNode
                            label={
                                <StyledNode>
                                    <img src={img1} alt="Image" />
                                    <h2>{strukturDataDesa[4].nama}</h2>
                                    <h3>{strukturDataDesa[4].jabatan}</h3>
                                </StyledNode>
                            }
                        >
                            <TreeNode
                                label={
                                    <StyledNode>
                                        <img src={img1} alt="Image" />
                                        <h2>{strukturDataDesa[3].nama}</h2>
                                        <h3>{strukturDataDesa[3].jabatan}</h3>
                                    </StyledNode>
                                }
                            />
                            <TreeNode
                                label={
                                    <StyledNode>
                                        <img src={img1} alt="Image" />
                                        <h2>{strukturDataDesa[5].nama}</h2>
                                        <h4>{strukturDataDesa[5].jabatan}</h4>
                                    </StyledNode>
                                }
                            />
                            <TreeNode
                                label={
                                    <StyledNode>
                                        <img src={img1} alt="Image" />
                                        <h2>{strukturDataDesa[6].nama}</h2>
                                        <h4>{strukturDataDesa[6].jabatan}</h4>
                                    </StyledNode>
                                }
                            />
                        </TreeNode>
                    </Tree>
                </Row>
            </Col>
        </Container>
    </div>
);

export default StrukturDesa;
