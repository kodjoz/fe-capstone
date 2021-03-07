import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import StarRow from '../starRow.jsx';
import { Button, Tile, ModalBackground, Italic, Palette, TextArea, FormTextInput } from '../globalStyles';


class AddReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      product_id: this.props.product_id,
      rating: null,
      recommend: null,
      summary: null,
      body: ' ',
      characteristics: {}, //object of characteristic_ids & associated 1-5 values
      images: [], //array of urls
      name: null,
      email: null,
    };
    this.setChanges = this.setChanges.bind(this);
    this.setCharacteristic = this.setCharacteristic.bind(this);
  }

  setChanges(tag) {
    this.setState({[tag.target.name]: tag.target.value});
  }

  setCharacteristic(tag) {
    let characteristics = Object.assign({}, this.state.characteristics);
    characteristics[tag.target.name] = tag.target.value;
    this.setState({'characteristics': characteristics});
  }

  submitReview(button) {
    button.preventDefault;
    return axios.post('/api/reviews', {
      params: {
        product_id: this.props.product_id,
        rating: this.state.rating,
        summary: this.state.summary,
        body: this.state.body,
        recommend: this.state.recommend,
        name: this.state.name,
        photos: this.state.photos,
        characteristics: this.state.characteristics
      }
    })
      .then((result) => {
        console.log(result);
        this.setState({active: !this.state.active});
      });
  }

  render() {
    if (!this.state.active) {
      return (<ReviewsButton onClick={()=>{ this.setState({active: !this.state.active}); }}>ADD A REVIEW  +</ReviewsButton>);
    } else {
      return (
        <ModalBackground>
          <ReviewForm>
            <CloseButton onClick={()=>{ this.setState({active: false}); }}>X</CloseButton>
            <Title>Write Your Review</Title>
            <br></br>
            <Subtitle>About {this.props.productName}</Subtitle>
            <Form>
              <Heading>Rating<Asterisk>&#42;</Asterisk></Heading>
              <StarRow name={'rating'} size={15} rating={0}></StarRow>
              <input required type='radio' name='rating' value={1} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating1'} value={1}>1</RadioLabel>
              <input required type='radio' name='rating' value={2} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating2'} value={2}>2</RadioLabel>
              <input required type='radio' name='rating' value={3} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating3'} value={3}>3</RadioLabel>
              <input required type='radio' name='rating' value={4} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating4'} value={4}>4</RadioLabel>
              <input required type='radio' name='rating' value={5} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating5'} value={5}>5</RadioLabel>
              <Heading>Do you recommend this product? <Asterisk>&#42;</Asterisk></Heading>
              <input required type="radio" name='recommend' value={true} id="recommend-yes" onClick={this.setChanges} />
              <RadioLabel htmlFor="recommend-yes" value={true}>Yes</RadioLabel>
              <input required type="radio" name='recommend' value={false} onClick={this.setChanges} id="recommend-no" />
              <RadioLabel htmlFor="recommend-no" value={false}>No</RadioLabel>
              <Heading>Characteristics<Asterisk>&#42;</Asterisk></Heading>
              {/* NOTE: characteristics will take array of objects, each object contains characteristic name, id, & value
                //e.g. [{name: "Width", "id": 15, "value": 3.5000},{name: "Comfort", "id": 16, "value": 4.0000}]
              */}
              {this.props.characteristics.map((characteristic) => {
                return (
                  <div key={JSON.stringify(characteristic.id) + this.props.product_id.toString()}>
                    <Characteristic>{characteristic.name}</Characteristic>
                    <input required type='radio' name={characteristic.name} id={characteristic.name + '1'} value={1} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic + '1'} value={1}>1</RadioLabel>
                    <input required type='radio' name={characteristic.name} id={characteristic.name + '2'} value={2} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic + '2'} value={2}>2</RadioLabel>
                    <input required type='radio' name={characteristic.name} id={characteristic.name + '3'} value={3} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic + '3'} value={3}>3</RadioLabel>
                    <input required type='radio' name={characteristic.name} id={characteristic.name + '4'} value={4} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic + '4'} value={4}>4</RadioLabel>
                    <input required type='radio' name={characteristic.name} id={characteristic.name + '5'} value={5} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic.name + '5'} value={5}>5</RadioLabel>
                  </div>
                );
              })}
              <Heading>Review Summary</Heading>
              <AddTextArea
                name="summary"
                placeholder={'Example: Best. Purchase. Ever!'}
                maxLength={60}
                onChange={this.setChanges}
              />
              <Heading>Tell us how you felt about the product<Asterisk>&#42;</Asterisk></Heading>
              <AddTextArea
                required
                rows={5}
                name="body"
                placeholder={'Example: It was the best of shoes, it was the worst of shoes...'}
                minLength={50}
                maxLength={1000}
                id="rev-body"
                onChange={this.setChanges}
              />
              <br></br>
              <Sidenote>Minimum length reached</Sidenote>
              <Sidenote>Minimum review length:  {this.state.body.length}/50</Sidenote>
              {/* <Sidenote>Minimum review length: {50 - document.getElementById('rev-body').value.length / 50}</Sidenote> */}
              <Heading>Show us your style! Add product photos below:</Heading>
              <FormButton name={'images'} onClick={()=>{ console.log('you thought it was functionality, but it was I, FAILURE!'); }}>Upload Images</FormButton>
              <Heading>Tell us your nickname<Asterisk>&#42;</Asterisk></Heading>
              <AddFormTextInput
                required
                type={'text'}
                name={'name'}
                placeholder={'Example: theDevilWearsNada666'}
                id="add-name"
                maxLength={60}
                onChange={this.setChanges}
              />
              <br></br>
              <Sidenote>For privacy reasons, do not use your full name or email address</Sidenote>
              <Heading>What is your email?<Asterisk>&#42;</Asterisk></Heading>
              <AddFormTextInput
                required
                type={'text'}
                name={'email'}
                placeholder={'Example: jvermeer32@email.com'}
                id="add-email"
                maxLength={60}
                onChange={this.setChanges}
              />
              <br></br>
              <Sidenote>For authentication reasons, you will not be emailed</Sidenote>
              <Padding></Padding>
              <Heading>Told us everything we need to know?</Heading>
              <Padding></Padding>
              <FormButton onClick={this.submitReview.bind(this)}>Submit Review</FormButton>
              <Heading></Heading>
            </Form>
          </ReviewForm>
        </ModalBackground>
      );
    }
  }
}

const ReviewsButton = styled(Button)`
  margin-top: 0.7rem;
  margin-right: 0.7rem;
`;

const ReviewForm = styled(Tile)`
  height: 90%;
  width: 50%;
  margin: 2% 25%;
  padding: 1em 5%;
  border: solid 1px ${Palette.borderGrey};
  border-radius: 1px;
  overflow: scroll;
`;

const CloseButton = styled(Button)`
  display: relative;
  float: right;
  background-color: white;
`;

const Title = styled(Italic)`
  margin-top: 1rem;
  display: block;
  font-size: 2rem;
`;

const Subtitle = styled(Italic)`
  display: block;
  margin-top: -2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  color: ${Palette.lowPriorityText};
`;

const Form = styled.form`
  margin-left: 1rem;
`;

const Heading = styled(Italic)`
  display: block;
  margin: 0.5rem -1rem;

`;

const Characteristic = styled(Heading)`
  margin: 0.25rem 0;
  font-size: 90%;
  text-decoration: underline;
`;

const Asterisk = styled.span`
  color: ${Palette.primary};
  font-size: 1.7rem;
`;

const RadioLabel = styled.label`
  margin-right: 4rem;
  position: relative;
`;

const AddTextArea = styled(TextArea)`
  width: 75%;
  padding-left: 2%;
`;

const AddFormTextInput = styled(FormTextInput)`
  width: 75%;
`;

const FormButton = styled(Button)`
  background-color: white;
  font-size: 1.1rem;
  &:hover {
    background-color: hsl(0, 0%, 95%);
  }
`;

const Sidenote = styled(Italic)`
  font-size: 1.25rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
  color: ${Palette.lowPriorityText};
`;

const Padding = styled.div`
  height: 0.25rem;
`;

AddReviewModal.propTypes = {
  product_id: PropTypes.number,
  characteristics: PropTypes.array,
  productName: PropTypes.string,
};

export default AddReviewModal;
