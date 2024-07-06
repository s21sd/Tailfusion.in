import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
export function TabsDemo() {
    return (
        <Tabs defaultValue="Preview" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="Preview">Preview</TabsTrigger>
                <TabsTrigger value="Code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="Preview">
                <h1>Preview Page</h1>
            </TabsContent>
            <TabsContent value="Code">
                <h1>Code Page</h1>
            </TabsContent>
        </Tabs>
    )
}
