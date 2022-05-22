import * as fs from 'fs';
import * as path from 'path';

export default async function getServerSideProps (req, res, context) {

    const hoge = "hoge success!";
    // JSON ファイルを読み込む
    const jsonPath = path.join(process.cwd(), 'data', 'second.md');
    //const jsonText = fs.readFileSync(jsonPath, 'utf-8');
    fs.writeFile(jsonPath, req.body.name, (err) => {
        if (err) throw err;
        console.log('正常に書き込みが完了しました');
    });

    res.status(200).json({ jsonPath: jsonPath });

    // ページコンポーネントに渡す props オブジェクトを設定する
    return {
        props: { hoge: hoge }
    }

}