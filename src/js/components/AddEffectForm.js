import React from 'react';

class AddEffectForm extends React.Component {
  createEffect(event) {
    event.preventDefault();

    console.log(event);

    const effect = {
      name: this.name.value,
      cssCode: this.cssCode.value,
    }
    this.props.addEffect(effect);
    this.effectForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.effectForm = input} className="effect-edit" onSubmit={(e) => this.createEffect(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Effect Name" />
        <textarea ref={(input) => this.cssCode = input} placeholder="Effect CSS" ></textarea>

        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddEffectForm;