class CreateVideos < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :video_url

      t.timestamps
    end
  end
end
