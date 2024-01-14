import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import "./App.css";

function App() {
  return (
    <>
      <h1>vite and @shadcn/ui</h1>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Hello Click Me </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>My menu 1</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>My menu 2</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>My menu 3</MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}

export default App;
