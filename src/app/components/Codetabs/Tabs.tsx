import Designone from "@/app/Designs/CardsDesign/Designone"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
export function TabsDemo() {
    return (
        <Tabs defaultValue="Preview" className="w-full">
            <div className="flex justify-between items-center w-[90%]">


                <TabsList className="grid w-[200px] grid-cols-2">
                    <TabsTrigger value="Preview">Preview</TabsTrigger>
                    <TabsTrigger value="Code">Code</TabsTrigger>
                </TabsList>

                <div className="hidden h-[28px] items-center gap-1.5 rounded-md border p-[2px] shadow-sm md:flex"><div role="group" dir="ltr" className="flex items-center justify-center gap-1" tabindex="0" className="outline: none;"><button type="button" data-state="on" role="radio" aria-checked="true" className="inline-flex items-center justify-center text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent h-[22px] w-[22px] rounded-sm p-0" tabindex="-1" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-monitor h-3.5 w-3.5"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg></button><button type="button" data-state="off" role="radio" aria-checked="false" className="inline-flex items-center justify-center text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent h-[22px] w-[22px] rounded-sm p-0" tabindex="-1" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tablet h-3.5 w-3.5"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg></button><button type="button" data-state="off" role="radio" aria-checked="false" className="inline-flex items-center justify-center text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent h-[22px] w-[22px] rounded-sm p-0" tabindex="-1" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smartphone h-3.5 w-3.5"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                </button>
                </div>
                </div>
            </div>
            <TabsContent value="Preview">
                <div className="h-fit m-3 border-gray-600 bg-[#151518] rounded-md shadow-md">
                    <Designone />
                </div>
            </TabsContent>
            <TabsContent value="Code">
                <div className="h-fit border border-gray-600">
                    <h1>Code page</h1>
                    <Designone />
                </div>
            </TabsContent>
        </Tabs>
    )
}
