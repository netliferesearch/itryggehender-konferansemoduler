export const DummyHtml = ({}) => {
  return (
    <>
      <h3 id="second-heading">Heading</h3>
      <ul>
        <li>
          Unordered lists, and:
          <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ol>
        </li>
        <li>More</li>
      </ul>
      <blockquote>
        <p>Blockquote</p>
      </blockquote>
      <p>
        And <strong>bold</strong>, <em>italics</em>, and even{" "}
        <em>
          italics and later <strong>bold</strong>
        </em>
        . Even <del>strikethrough</del>.{" "}
        <a href="https://markdowntohtml.com">A link</a> to somewhere.
      </p>
      <p>More text to see how text can look when there is alot of it. We can see that by having alot of text and looking at the page. There we can see alot of text on the page. That is done by writing alot of text to be displayed on the page. Check it out by looking at the text that has been added on on the page. There you go. Text on a page. You're welcome. :)</p>
      <p>And code highlighting:</p>
      <pre>
        <code class="">
          <span class="">var</span> foo ={" "}
          <span class="">'bar'</span>;
          <span class="">
            <span class="">function</span>{" "}
            <span class="">baz</span>
            <span class="">(s)</span>{" "}
          </span>
          <span class="">return</span>
          <span class="">':'</span>;
        </code>
      </pre>
      <p>
        Or inline code like <code>var foo = &#39;bar&#39;;</code>.
      </p>
      <p>Or an image of bears</p>
      <p>
        <img src="http://placebear.com/200/200" alt="bears" />
      </p>
      <p>The end ...</p>
    </>
  );
};
