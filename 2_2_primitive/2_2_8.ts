// プリミティブ型

{
    function print(name: string, age?: number) {
        console.log(`name: ${name}, age: ${age || 'empty'}`);
    }
    print('ise', 38);
}
