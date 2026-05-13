// // import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// // import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// // import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";

// type PropsA = {
//     title:string,
//     description: string,
// }
//
// interface PropsB {
//     title: string,
//     description: string,
// }
//
// // UNION
// type Status = "Error" | "Info" | "Warning";
//
// // Tuples
// type Coordinates = [number, number];
//
// // Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// // INTERSECTION
// type Props = PropsA & PropsB;
//
// interface PropsTwo {
//     title: string,
//     description: string,
// }
//
// interface PropsTwo {
//     price: number,
//     sort: number,
// }
// // PropsTwo = {title, description, price, sort}
//
// interface PropsThree extends PropsTwo {
//     image: string,
// }
// // PropsThree = {title, description, price, sort, image}

function App() {

  return (
      <>
          {/*<FunctionalComponent />*/}
          {/*<FunctionalComponent />*/}
          {/*<FunctionalComponent />*/}
          {/*<FunctionalComponent />*/}
          {/*<ClassComponent />*/}
          {/*ArrowFunctionalComponent*/}

          {/*LESSON THREE*/}
          {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
          {/*<ArrowFunctionalComponentWithProps */}
          {/*    title="Second Title" */}
          {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem fugiat illum laborum maxime quam quas ratione soluta tempore voluptatibus!"*/}
          {/*/>*/}

          <Layout>
            <ArrowFunctionalComponentWithProps
                title="Second Title"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, aut culpa deserunt eligendi nulla omnis possimus quis sequi tempore vitae."
            />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, mollitia?</p>
          </Layout>

      </>
  )
}
export default App