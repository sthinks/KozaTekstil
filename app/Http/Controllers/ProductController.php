<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getall()
    {
        $data = Product::all();
        $data->
            map(
                function ($i) {
                    $alotImage = str_contains($i->image, ",");
                    if ($alotImage) { //coklu resim -slider
                        $i->image = sprintf(
                            "%s",
                            str_replace('\\\\', '/', $i->image)
                        );
                        $i->image = sprintf("%s", str_replace('products', url('storage/products'), $i->image));
                        $i->image = sprintf("%s", str_replace("\"", "", $i->image));
                        $i->image = sprintf("%s", str_replace("[", "", $i->image));
                        $i->image = sprintf("%s", str_replace("]", "", $i->image));
                    } else { //tekli resim-slider
                        $i->image = url(
                            sprintf(
                                "storage/%s",
                                str_replace('\\\\', '/', $i->image)
                            )
                        );
                        $i->image = sprintf("%s", str_replace("\"", "", $i->image));
                        $i->image = sprintf("%s", str_replace("[", "", $i->image));
                        $i->image = sprintf("%s", str_replace("]", "", $i->image));
                    }
                }
            );

        return response()->json([
           "data"=> $data
        ]);
    }
}
