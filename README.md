# modal-like-chakra-ui

## 설명

Compound Component로 Chakra UI랑 비슷한 기능을 하도록 구현

## 설치

```
// js환경과 ts환경 둘 다 사용 가능합니다.

npm i -D styled-components  - 스타일 컴포넌트를 사용해야 합니다.
npm i -D react react-dom - react 환경이어야 합니다.
```

## 사용법

### 기본 스타일은 다음과 같이 사용할 수 있습니다.

```jsx
const onChange = () => {};

const [isModal, closeModal, openModal] = useCardModal(true);

<Modal isModal={isModal} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>대충 모달 타이틀이라는 내용</ModalHeader>
    <ModalBody>대충 모달 Body라는 내용</ModalBody>
    <ModalFooter>
      <ModalCloseButton />
    </ModalFooter>
  </ModalContent>
</Modal>;
```

### 해당 기능의 스타일을 주고 싶다면 다음과 같이 사용하세요 (ex) Modal body에 커스텀 스타일을 적용하고 싶을 때)

```jsx
<Modal isModal={isModal} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>대충 모달 타이틀이라는 내용</ModalHeader>
    <ModalBody isCustom>
      <StyledModalBody>대충 모달 Body라는 내용</StyledModalBody>
    </ModalBody>
    <ModalFooter>
      <ModalCloseButton />
    </ModalFooter>
  </ModalContent>
</Modal>;

const StyledModalBody = styled.div`
  /*
    커스텀 디자인 작성하기
  */
`;
```

### 그 외 props

1. blockScrollOnMount

```jsx
<Modal blockScrollOnMount={false}>{children}</Modal>
```

- 해당 속성을 사용해서 Modal 창이 띄워졌을 시 scroll이 안되게 한다.

2. isCenter

```jsx
<Modal.Content isCenter={true}></Modal.Content>

// Modal 내의 속성에서는 어디서는 사용할 수 있다.
```

- 해당 속성을 사용해서 해당 컨텐츠를 화면 가운데 띄울 수 있다.

3. isBottom

```jsx
<Modal.Content isBottom={true}></Modal.Content>
```

- 해당 속성을 사용해서 해당 컨텐츠를 화면 하단에 띄울 수 있다.

### 컴포넌트 이해하기

1. Modal

- Modal에 props를 부여, 해당 기능을 넣어준다.

2. Modal.Overlay

- Modal의 뒷배경(어두운)을 나타낸다.
- chilldren 및 별도의 props는 존재하지 않는다.
- 커스텀 스타일링 불가능

3. Modal.Content

- Modal의 내용을 담는 컴포넌트를 나타낸다.
- `isCustom`, `isBottom`, `isCenter` 속성을 넣을 수 있다.

4. Modal.CloseButton

- Modal을 닫는 기능을 가진 버튼을 나타낸다.
- `isCustom`속성을 통해 커스텀 스타일링이 가능하다.

5. Modal.Header

- Modal Content 내부에 Header의 기능을 가진 컴포넌트를 나타낸다.
- `isCustom`속성을 통해 커스텀 스타일링이 가능하다.

5. Modal.Body

- Modal Content 내부에 Body의 기능을 가진 컴포넌트를 나타낸다.
- `isCustom`속성을 통해 커스텀 스타일링이 가능하다.

5. Modal.Footer

- Modal Content 내부에 Footer의 기능을 가진 컴포넌트를 나타낸다.
- `isCustom`속성을 통해 커스텀 스타일링이 가능하다.
