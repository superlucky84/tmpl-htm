import {
  h,
  Fragment,
  tmplTag,
  appendAll,
  prependAll,
  replaceAll,
  insertBeforeAll,
  append,
  prepend,
  replace,
  insertBefore,
} from '@/index';

const Jj = (props: { a: string }) => {
  return <li>count2: {props.a}</li>;
};

const Renew = (props: { a: string }) => {
  return tmplTag`
    <${Fragment}>
      <${Jj} a="7" />
      <li>count1: ${props.a}</li>
      <button>change</button>
      <div style=${{ width: '30px' }}>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    <//>
  `;
};

document.body.appendChild(<Renew a="3" />);
document.body.appendChild(<Renew a="9" />);

const makeTestbed = () => {
  const testWrap = document.createElement('div');
  testWrap.innerHTML = `<section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section>`;
  return testWrap;
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  let testWrap: HTMLElement = document.createElement('div');
  it('Original status?', () => {
    testWrap = makeTestbed();
    expect(testWrap.outerHTML).toBe(
      '<div><section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('appendAll', () => {
    testWrap = makeTestbed();

    appendAll(<Jj a="3" />, testWrap.querySelectorAll('.test'));
    expect(testWrap.outerHTML).toBe(
      '<div><section class="test"> <div>1</div> <div>2</div> <div>3</div> <li>count2: 3</li></section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> <li>count2: 3</li></section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> <li>count2: 3</li></section></div>'
    );
  });

  it('appendAll = one element', () => {
    testWrap = makeTestbed();

    appendAll(<Jj a="3" />, testWrap.querySelector('.test') as HTMLElement);
    expect(testWrap.outerHTML).toBe(
      '<div><section class="test"> <div>1</div> <div>2</div> <div>3</div> <li>count2: 3</li></section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('append', () => {
    testWrap = makeTestbed();

    append(<Jj a="3" />, testWrap.querySelector('.test') as HTMLElement);
    expect(testWrap.outerHTML).toBe(
      '<div><section class="test"> <div>1</div> <div>2</div> <div>3</div> <li>count2: 3</li></section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('prependAll', () => {
    testWrap = makeTestbed();
    prependAll(<Jj a="3" />, testWrap.querySelectorAll('.test'));
    expect(testWrap.outerHTML).toBe(
      '<div><section class="test"> <li>count2: 3</li><div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <li>count2: 3</li><div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <li>count2: 3</li><div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('prependAll = one element', () => {
    testWrap = makeTestbed();
    prependAll(<Jj a="3" />, testWrap.querySelector('.test') as HTMLElement);
    expect(testWrap.outerHTML).toBe(
      '<div><section class="test"> <li>count2: 3</li><div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('prepend', () => {
    testWrap = makeTestbed();
    prepend(<Jj a="3" />, testWrap.querySelector('.test') as HTMLElement);
    expect(testWrap.outerHTML).toBe(
      '<div><section class="test"> <li>count2: 3</li><div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('replaceAll', () => {
    testWrap = makeTestbed();
    replaceAll(<Jj a="3" />, testWrap.querySelectorAll('.test'));
    expect(testWrap.outerHTML).toBe(
      '<div><li>count2: 3</li> <li>count2: 3</li> <li>count2: 3</li></div>'
    );
  });

  it('replaceAll = one element', () => {
    testWrap = makeTestbed();
    replaceAll(<Jj a="3" />, testWrap.querySelector('.test') as HTMLElement);
    expect(testWrap.outerHTML).toBe(
      '<div><li>count2: 3</li> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('replace', () => {
    testWrap = makeTestbed();
    replace(<Jj a="3" />, testWrap.querySelector('.test') as HTMLElement);
    expect(testWrap.outerHTML).toBe(
      '<div><li>count2: 3</li> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('insertBeforeAll', () => {
    testWrap = makeTestbed();
    insertBeforeAll(<Jj a="3" />, testWrap.querySelectorAll('.test'));
    expect(testWrap.outerHTML).toBe(
      '<div><li>count2: 3</li><section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <li>count2: 3</li><section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <li>count2: 3</li><section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('insertBeforeAll = one element', () => {
    testWrap = makeTestbed();
    insertBeforeAll(
      <Jj a="3" />,
      testWrap.querySelector('.test') as HTMLElement
    );
    expect(testWrap.outerHTML).toBe(
      '<div><li>count2: 3</li><section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });

  it('insertBefore', () => {
    testWrap = makeTestbed();
    insertBefore(<Jj a="3" />, testWrap.querySelector('.test') as HTMLElement);
    expect(testWrap.outerHTML).toBe(
      '<div><li>count2: 3</li><section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section> <section class="test"> <div>1</div> <div>2</div> <div>3</div> </section></div>'
    );
  });
}
