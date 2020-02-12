<?php

use Illuminate\Database\Seeder;

class LandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = Str::random(10);
        $i = 0;
        $client_id = 1;
        $location_id = 1;
        while ($i <= 100) {
            if($client_id > 3){
                $client_id = 1;
            }

            if($location_id > 3){
                $location_id = 1;
            }

            DB::table('lands')->insert([
                'name' => $name,
                'description' => Str::random(50),
                'price' => rand(10000, 30000), 
                'location_id' => $location_id,
                'client_id' => $client_id,
                'user_id' => 1,
                'sold_at' => $this->randomDate( '2020-01-01', '2020-02-11' ),
                'commission_line_1' => rand(300, 500),
                'commission_line_2' => rand(150, 300),
                'commission_line_3' => rand(50, 150),
            ]);

            $client_id++;
            $location_id++;
            $i++;
        }

    }

    // Find a randomDate between $start_date and $end_date
    public function randomDate($start_date, $end_date)
    {
        // Convert to timetamps
        $min = strtotime($start_date);
        $max = strtotime($end_date);

        // Generate random number using above bounds
        $val = rand($min, $max);

        // Convert back to desired date format
        return date('Y-m-d H:i:s', $val);
    }
}
