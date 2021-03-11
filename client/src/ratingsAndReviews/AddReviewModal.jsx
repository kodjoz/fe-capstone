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
      photos: [], //array of urls
      photosUploaded: 0,
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
    let id = tag.target.id.slice(0, tag.target.id.length - 1);
    characteristics[id] = parseInt(tag.target.value);
    this.setState({'characteristics': characteristics});
  }

  addPhoto(event) {
    //push url string to state's photos array, then
    console.log('photo(s) added: ', event.target.files);
    console.log('photo(s) added, stringify: ', JSON.stringify(event.target.files));
    console.log('event files length:', event.target.files.length);
    let photos = this.state.photos;
    for (var key in event.target.files) {
      if (photos.length < 5) { photos.push(event.target.files[key]); }
    }
    this.setState({photos: photos}, () => {
      console.log('state photos: ', this.state.photos);
    });
    // this.setState({photosUploaded: this.state.photosUploaded + 1}, () => {
    //   if (this.state.photosUploaded >= 5) {
    //     document.getElementById('upload-photo-btn').style.visibility = 'hidden';
    //     document.getElementById('upload-photo-btn').style.height = '1px';
    //     document.getElementById('upload-limit-reached').style.visibility = 'visible';
    //   }
    // });
  }

  submitReview(submit) {
    submit.preventDefault();
    let recommended = this.state.recommend === 'true';
    console.log(
      'productid: ', typeof this.state.product_id === 'number',
      ' rating: ', typeof parseInt(this.state.rating) === 'number', 'val: ', parseInt(this.state.rating),
      ' summary: ', typeof this.state.summary === 'string',
      ' body: ', typeof this.state.body === 'string',
      ' recommend: ', typeof recommended === 'boolean',
      ' name: ', typeof this.state.name === 'string',
      ' email: ', typeof this.state.email === 'string',
      ' photos: ', typeof this.state.photos === 'object',
      ' photo: ', typeof this.state.photos[0] === 'string',
      ' characteristics: ', typeof this.state.characteristics === 'object',
      ' characteristic value: ', typeof this.state.characteristics[64401] === 'number',
      'characteristics full vals: ', JSON.stringify(this.state.characteristics)
    );

    return axios.post('/api/reviews', {
      product_id: parseInt(this.props.product_id),
      rating: parseInt(this.state.rating),
      summary: this.state.summary,
      body: this.state.body,
      recommend: recommended,
      name: this.state.name,
      photos: this.state.photos,
      email: this.state.email,
      characteristics: this.state.characteristics
    })
      .then((result) => {
        console.log('axios post: ', JSON.stringify(result));
        this.setState({active: !this.state.active});
      })
      .catch((error) => {
        console.error('Error posting review: ', error.response.data);
        console.error('Error contents: ', JSON.stringify(error));
        alert('Failed to post review');
      });
  }

  render() {
    if (!this.state.active) {
      return (<ReviewsButton onClick={()=>{ this.setState({active: !this.state.active}); }}>ADD A REVIEW  +</ReviewsButton>);
    } else {
      let photoUploads;
      if (this.state.photos.length < 5) {
        photoUploads = <UploadPhoto type='file' accept='image/*' multiple onChange={this.addPhoto.bind(this)}/>;
      } else {
        photoUploads = <UploadLimitReached>Max. 5 photos limit reached - thanks for sharing!</UploadLimitReached>;
      }
      let minBody;
      if (this.state.body.length < 50) {
        minBody = <SidenoteWarning>Minimum review length:  {this.state.body.length}/50</SidenoteWarning>;
      } else {
        minBody = <Sidenote>Minimum length reached!</Sidenote>;
      }
      return (
        <ModalBackground>
          <ReviewForm>
            <CloseButton onClick={()=>{ this.setState({active: false}); }}>X</CloseButton>
            <Title>Write Your Review</Title>
            <br></br>
            <ProductName>About {this.props.product.name}</ProductName>
            <Form>
              <Heading>Rating<Asterisk>&#42;</Asterisk></Heading>
              <StarRow name={'rating'} size={15} rating={0}></StarRow>
              <input required type='radio' id={'rating1'} name='rating' value={1} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating1'} value={1}>1</RadioLabel>
              <input required type='radio' id={'rating2'} name='rating' value={2} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating2'} value={2}>2</RadioLabel>
              <input required type='radio' id={'rating3'} name='rating' value={3} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating3'} value={3}>3</RadioLabel>
              <input required type='radio' id={'rating4'} name='rating' value={4} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating4'} value={4}>4</RadioLabel>
              <input required type='radio' id={'rating5'} name='rating' value={5} onClick={this.setChanges} />
              <RadioLabel htmlFor={'rating5'} value={5}>5</RadioLabel>
              <Heading>Do you recommend this product? <Asterisk>&#42;</Asterisk></Heading>
              <input required type="radio" name='recommend' value={true} id="recommend-yes" onClick={this.setChanges} />
              <RadioLabel htmlFor="recommend-yes" value={true}>Yes</RadioLabel>
              <input required type="radio" name='recommend' value={false} onClick={this.setChanges} id="recommend-no" />
              <RadioLabel htmlFor="recommend-no" value={false}>No</RadioLabel>
              <Heading>Characteristics<Asterisk>&#42;</Asterisk></Heading>
              {this.props.characteristics.map((characteristic) => {
                return (
                  <div key={JSON.stringify(characteristic.id) + this.props.product_id.toString()}>
                    <Characteristic>{characteristic.name}</Characteristic>
                    <input required type='radio' name={characteristic.name} id={characteristic.id + '1'} value={1} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic.id} value={1}>1</RadioLabel>
                    <input required type='radio' name={characteristic.name} id={characteristic.id + '2'} value={2} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic.id} value={2}>2</RadioLabel>
                    <input required type='radio' name={characteristic.name} id={characteristic.id + '3'} value={3} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic.id} value={3}>3</RadioLabel>
                    <input required type='radio' name={characteristic.name} id={characteristic.id + '4'} value={4} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic.id} value={4}>4</RadioLabel>
                    <input required type='radio' name={characteristic.name} id={characteristic.id + '5'} value={5} onClick={this.setCharacteristic} />
                    <RadioLabel htmlFor={characteristic.id} value={5}>5</RadioLabel>
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
              {minBody}
              <Heading>Show us your style! Add product photos below:</Heading>
              <br></br>
              {photoUploads}
              {/* <input type='file' onChange={this.addPhoto.bind(this)}/> */}
              {/* <UploadPhoto name={'images'} id={'upload-photo-btn'} onClick={this.addPhoto.bind(this)}>Upload Images</UploadPhoto> */}
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
              <SubmitButton onClick={this.submitReview.bind(this)}>Submit Review</SubmitButton>
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

const ProductName = styled(Subtitle)`
  font-size: 1.5rem;
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
  color: ${({ theme }) => theme.primary};
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

const SubmitButton = styled(Button)`
  background-color: white;
  font-size: 1.1rem;
  &:hover {
    background-color: hsl(0, 0%, 95%);
  }
`;

//FIX ME!!!
const UploadPhoto = styled.input`
  margin-top: -2em;
  margin-bottom: 2em;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.midLayer};
  border: 1px solid ${({ theme }) => theme.borders};
  color: ${({ theme }) => theme.lowPriorityText};
  height: 4rem;
  padding: 0 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.midLight};
    color: ${({ theme }) => theme.secondaryText};
  }
`;

const Sidenote = styled(Italic)`
  font-size: 1.25rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.lowPriorityText};
`;

const SidenoteWarning = styled(Sidenote)`
  color: ${({ theme }) => theme.primary}
`;

const Padding = styled.div`
  height: 0.25rem;
`;

const UploadLimitReached = styled(Sidenote)`
  margin-top: 0.5rem;
  display: block;
  font-size: 90%;
`;

AddReviewModal.propTypes = {
  product_id: PropTypes.number,
  characteristics: PropTypes.array,
  product: PropTypes.object,
};

export default AddReviewModal;
