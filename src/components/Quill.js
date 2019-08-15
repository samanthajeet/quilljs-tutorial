import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"], // blocks
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }], // lists
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // header dropdown
    [{ color: [] }, { background: [] }], // dropdown with defaults
    [{ font: [] }], // font family
    // [{ align: [] }], // text align
    ["clean"], // remove formatting
    ['link']
  ]
};

const formats = [
  "header",
  "font",
  "background",
  "color",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "script",
  "direction",
  "link"
];

const style = { //css in js
  quillStyle: {
    height: "90%"
  },

  h3: {
    textTransform: 'uppercase',
    textDecoration: 'underline'
  }
};

class Quill extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div className="quilljs-container">
        <section id="react-quill">
          <ReactQuill
            style={style.quillStyle}
            value={this.state.text}
            onChange={this.handleChange}
            theme="snow"
            modules={modules}
            formats={formats}
          />
        </section>
        <section className="right-panel">
          <section id="output">
          <h3 style={style.h3}>output with styling</h3>
            <section
              dangerouslySetInnerHTML={{ __html: this.state.text }} // dangerouslySetInnerHTML outputs the text with html tags
            />
          </section>
          <section id="database">
            <h3 style={style.h3}>what gets saved to the database</h3>
            <p>{this.state.text}</p>
          </section>
        </section>
      </div>
    );
  }
}

export default Quill;
