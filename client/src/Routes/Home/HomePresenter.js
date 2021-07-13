import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LanguageBar from '../../Components/LanguageBar';
import TextareaAutosize from 'react-textarea-autosize';
import { Button } from 'react-bootstrap';
import '../../assets/App.css';

import BottomAdSense from '../../AdSense/BottomAdSense';

const Container = styled.div`
  height: calc(100vh - 65px);
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  :before {
    display: block;
    width: 100%;
    height: 165px;
    background: #fafafa;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    content: '';
    overflow: hidden;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Section = styled.div`
  max-width: 1680px;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

const Card = styled.div`
  width: 100%;
  min-height: auto;
  margin-top: 40px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
`;

const CardBody = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const InputContent = styled.div`
  display: block;
  position: relative;
  width: 33%;
  min-height: 300px;
  padding: 20px;
  border-radius: 0 0 0 8px;
  background-color: #fff;
  flex-grow: 1;
  z-index: 1;
`;

const ResultContent = styled.div`
  position: relative;
  box-shadow: none;
  padding: 20px;
  width: 33%;
  border-right: ${(props) => (props.type === 'google' ? '1px solid rgba(0, 0, 0, 0.12)' : '0')};
  border-radius: ${(props) => (props.type === 'google' ? '0' : '0 0 8px 0')};
  background-color: #f5f5f5;
`;

const ResultFooter = styled.div`
  position: absolute;
  width: calc(100% - 30px);
  bottom: 8px;
  padding-top: 8px;
`;

const HomePresenter = ({ onInput, googleText, papagoText, googleTextCopy, papagoTextCopy }) => {
  return (
    <Container>
      <Section>
        <Card>
          <LanguageBar />
          <CardBody>
            <InputContent>
              <TextareaAutosize className="input-textarea" onInput={onInput} />
            </InputContent>
            <ResultContent type={'google'}>
              <div className="result-text">{googleText}</div>
              <ResultFooter>
                <Button className="copy-button" onClick={googleTextCopy}>
                  Copy
                </Button>
              </ResultFooter>
            </ResultContent>
            <ResultContent type={'papago'}>
              <div className="result-text">{papagoText}</div>
              <ResultFooter>
                <Button className="copy-button" onClick={papagoTextCopy}>
                  Copy
                </Button>
              </ResultFooter>
            </ResultContent>
          </CardBody>
        </Card>
      </Section>

      <div className="bottom-google-ad">
        <BottomAdSense/>
      </div>
    </Container>
  );
};

HomePresenter.propTypes = {
  onInput: PropTypes.func,
  googleText: PropTypes.string,
  papagoText: PropTypes.string,
  googleTextCopy: PropTypes.func,
  papagoTextCopy: PropTypes.func,
};

export default HomePresenter;
